import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

const db = getFirestore();

export async function checkForMatch(currentUserId, likedUserId) {
  console.log("Checking match for", currentUserId, "->", likedUserId);

  try {
    const likedUserRef = doc(db, "interactions", likedUserId);
    const likedUserSnap = await getDoc(likedUserRef);

    if (likedUserSnap.exists()) {
      const likedUserData = likedUserSnap.data();
      console.log("Liked user likes:", likedUserData.likes);

      if (likedUserData.likes && likedUserData.likes.includes(currentUserId)) {
        console.log("✅ MATCH FOUND!");

        // Save to 'matches' collection
        await saveMatch(currentUserId, likedUserId);

        const msg = document.getElementById("match-message");
        msg.innerText = "💖 It's a Match!";
        msg.style.display = "block";
        setTimeout(() => (msg.style.display = "none"), 3000);
      } else {
        console.log("No match yet.");
      }
    } else {
      console.log("No interactions from liked user yet.");
    }
  } catch (err) {
    console.error("Match check failed:", err.message);
  }
}

async function saveMatch(user1, user2) {
  const matchId = [user1, user2].sort().join("_");
  const matchRef = doc(db, "matches", matchId);
  const matchData = {
    users: [user1, user2],
    timestamp: Date.now(),
  };
  await setDoc(matchRef, matchData);
}

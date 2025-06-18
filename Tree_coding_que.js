function minRounds(N, edges, K) {
  // Step 1: Create an adjacency list to represent the tree
  // Each node will store its children (tasks that depend on it)
  const tree = Array.from({ length: N + 1 }, () => []);

  // Step 2: Create an array to track how many parent tasks each task is waiting on
  const pending = Array(N + 1).fill(0);

  // Step 3: Fill the tree and pending dependencies
  for (const [parent, child] of edges) {
    tree[parent].push(child); // add child to parent's list
    pending[child]++;         // child has one more parent to wait for
  }

  // Step 4: Start with tasks that have no pending parents (they can be executed first)
  let queue = [];
  for (let i = 1; i <= N; i++) {
    if (pending[i] === 0) queue.push(i); // no parent = root task
  }

  let rounds = 0; // to count how many rounds of execution we need

  // Step 5: Process tasks in rounds
  while (queue.length > 0) {
    // Pick up to K tasks that can run in parallel in this round
    let tasks = queue.splice(0, K);
    let next = []; // will store newly ready tasks for the next round

    // Step 6: For each task in this round, mark their children as "1 less parent to wait"
    for (let task of tasks) {
      for (let child of tree[task]) {
        pending[child]--; // one parent finished
        if (pending[child] === 0) {
          next.push(child); // this child is now ready to be executed
        }
      }
    }

    // Add ready tasks to the queue for the next round
    queue = queue.concat(next);
    rounds++; // this round is done
  }

  return rounds;
}


console.log(minRounds(5,  [[1, 2], [1, 3], [3, 4], [3, 5]] , 3));
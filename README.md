# Task Scheduler Tree - minRounds

This is a JavaScript (Node.js) solution to calculate the **minimum number of rounds** required to complete all tasks in a tree-like dependency structure, where each task can only be done after its parent and up to `K` tasks can be executed in parallel per round.

---

## Problem Description

- You are given:
  - `N`: Number of tasks (numbered from 1 to N)
  - `edges`: A list of `[parent, child]` pairs (tree edges showing dependency)
  - `K`: Maximum number of tasks that can be executed in parallel per round
- A task can only be executed **after its parent task is completed**.
- The goal is to calculate the **minimum number of rounds** needed to finish all tasks.

---

## Code Logic Explanation

### Step-by-step breakdown:

1. **Create a Tree (Adjacency List):**
   - Each task may have children (tasks that depend on it).
   - We store all children in an array for every task (like a map of parent → list of children).

2. **Track Dependencies (Pending Parents):**
   - Create an array `pending` that tracks how many parent tasks each task is waiting on.
   - If `pending[i] == 0`, it means task `i` is ready to run.

3. **Find Initial Tasks to Start With:**
   - Push all tasks with no parent (root tasks) into a `queue`. These are ready to run from round 1.

4. **Process in Rounds (BFS style):**
   - In each round, run up to `K` tasks in parallel (grab `K` from the front of the queue).
   - For every task run, reduce the `pending count` of their children.
   - If any child's pending count reaches `0`, add it to the `next` list for the upcoming round.

5. **Repeat Until All Tasks Are Done:**
   - After processing a round, add `next` tasks to the queue.
   - Count each such iteration as one round.
   - When queue is empty, all tasks are complete.

6. **Return the Total Number of Rounds.**

---

### Example

```js
minRounds(5, [[1, 2], [1, 3], [3, 4], [3, 5]], 2);
// Output: 3
```
---

## How to Run

### 1. Install Node.js (if not already)

Download and install Node.js from:  
 [https://nodejs.org](https://nodejs.org)

To verify it's installed, run:
```bash
node -v
```

Run :
```bash
Node Tree_coding_que.js
```

See Out Put Here :

![image](https://github.com/user-attachments/assets/b1a34dcd-faee-41ce-8633-aa7d1aea6579)

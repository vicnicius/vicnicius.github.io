1. Intro
- Problem: Need to trust (in finantial institutions) to be able to transact digitally. Completely non-reversible transactions are not really possible. Digital signatures solves one part of the problem, but not *double-spending* issues
- Solution: Digital signatures + peer-to-peer distributed timestamp server to generate computational proof of the chronological order of transactions
    - The system is secure as long as honest nodes collectively control more CPU power than any cooperating group of attacker nodes

2. Transactions
- Eletronic coin = chain of digital signatures
- Ex.:
    - A wants to pay some amount of coin to B;
    - A get's B public key, signs a hash of the previous transactions;
    - B can verify the signature sent;
    - *Problem*: B can't verify double-spending
    - *Solutions*:
        - Be aware of all transactions
        - All transactions are broadcasted
        - The payee needs proof that at the time of each transaction, the majority of nodes agreed it was the first received

3. Timestamp Server
- takes a hash of a block of items and timestamp it, broadcasting the resulting hash
- Each timestamp includes the previous timestamp in it's hash

4. Proof-of-Work
- Scanning for a value that when hashed (SHA-256) the hash begins with a number of zero bits (target difficulty), by adding a nonce to the block. + zeros, + work required, verification costs only one hash computation
- Once the Proof-of-Work was satisfied, chaning the block would mean re-do the work, and all the other blocks attached to it
- 1-CPU-1-vote -> longest chain, bigger Proof-of-Work invested
- Majority of CPU power = honest -> longest chain = the honest one
- Difficulty -> # of blocks per hour

5. Network
    1. New transactions are broadcast to all nodes
    2. Each node collects new transactions into a block
    3. Each node works on finding a difficult proof-of-work for its block
    4. When a node finds a proof-of-work, it broadcasts the block to all nodes
    5. Nodes accept the block only if all transactions in it are valid and not already spent
    6. Nodes express their acceptance of the block by working on creating the next block in the chain, using the hash of the accepted block as the previous hash
- Two different versions of the next block broadcasted:
    1. Node works on the first one it received, but saves the other
    2. Decides which branch to use when the next Proof-Of-Work is broadcasted
- Transactions only need to reach "many" nodes to make sure they will get into a block
- Block broadcasting is also fault tolerant. If a node does not receive a block, it will ask when it realizes the missing (when receiving the next block)

6. Incentive
- First transaction in a block = new coin owned by the creator
- CPU power = more coins -> stay honest pays off

7. Reclaiming Disk Space (?)
- Transactions are hashed in a Merkel Tree

8. Simplified Payment Verification
- Check the Merkle branch of the transaction block where it was timestamped and check against the block header chain (the longest one) received from the nodes

9. Combining and Splitting Value
- A transaction may contain multiple inputs and outputs

10. Privacy
- Boils down to: keep public keys anonymous


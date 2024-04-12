// Singleton instance of BankBranch
let bankBranchInstance = null

class BankBranch {
    // Constructor function that checks if an instance already exists
    constructor(branchInfo) {
        // If an instance already exists, return it
        if (!bankBranchInstance) {
            // If no instance exists, initialize the object with the provided branchInfo
            this.branchInfo = branchInfo;
            // Set the singleton instance to the newly created object
            bankBranchInstance = this;
        } 

        return bankBranchInstance;
    }

    // Getter function to retrieve the branchInfo property
    getBranchInfo() {
        // Return the branchInfo property of the singleton instance
        return this.branchInfo;
    }
}

// Create two instances of BankBranch with different branchInfo values
const branchA = new BankBranch("adbd");
const branchB = new BankBranch("frgh");

console.log(branchA)
console.log(branchB)

// Log whether 'branchA' and 'branchB' are the same object
console.log(`Is 'branchA' and 'branchB' the same object? ${branchA === branchB}`);
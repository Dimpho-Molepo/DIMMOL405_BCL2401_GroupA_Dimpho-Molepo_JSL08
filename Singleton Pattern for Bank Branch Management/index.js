let bankBranchInstance = null

class BankBranch {
    constructor(branchInfo) {
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        } 

        return bankBranchInstance;
    }

    getBranchInfo() {
        return this.branchInfo
    }
}

const branchA = new BankBranch("adbd");
const branchB = new BankBranch("frgh");

console.log(branchA)
console.log(branchB)

console.log(`Is 'branchA' and 'branchB' the same object? ${branchA === branchB}`);
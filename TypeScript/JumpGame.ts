function canJump(nums: number[]): boolean {
    let final = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > final) {
            return false;
        }

        final = Math.max(final, i + nums[i]);
        if (final >= nums.length - 1) {
            return true;
        }
    }
    return false;
}

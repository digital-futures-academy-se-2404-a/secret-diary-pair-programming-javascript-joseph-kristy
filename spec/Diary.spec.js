import Diary from "../src/Diary.js";

it("should create entries when the diary is unlocked", () => {

    // Arrange
    const testEntry = {};
    const testDiary = new Diary();

    // Act
    testDiary.createEntry(testEntry);

    // Assert
    expect(testDiary.getEntries()[0]).toEqual(testEntry);

});

it("should not create entries when the diary is locked", () => {

    // Arrange
    const testEntry = {};
    const testDiary = new Diary();

    // Act
    testDiary.lockDiary();
    testDiary.createEntry(testEntry);

    // Assert
    testDiary.unlockDiary("0123");
    expect(testDiary.getEntries()[0]).toBe(undefined);

})

it("should let user view entries when the diary is unlocked", () => {

    // Arrange
    const testDiary = new Diary();

    // Act
    const actual = testDiary.getEntries();

    // Assert
    expect(actual).not.toBe(undefined);

})

it("should not let user view entries when the diary is locked", () => {

    // Arrange
    const testDiary = new Diary();

    // Act
    testDiary.lockDiary();
    const actual = testDiary.getEntries();

    // Assert
    expect(actual).toBe(undefined);

})

it("should allow user to lock the diary", () => {

    // Arrange
    const testDiary = new Diary();

    // Act
    testDiary.lockDiary();
    const actual = testDiary.getLocked();

    // Assert
    expect(actual).toBeTrue();
})

it("should stay locked when the incorrect pin is passed", () => {

    // Arrange
    const testDiary = new Diary();

    // Act
    testDiary.lockDiary();
    testDiary.unlockDiary("7895");
    const actual = testDiary.getLocked();

    // Assert
    expect(actual).toBeTrue();
})

it("should unlock when the correct pin is passed", () => {

    // Arrange
    const testDiary = new Diary();

    // Act
    testDiary.lockDiary();
    testDiary.unlockDiary("0123");
    const actual = testDiary.getLocked();

    // Assert
    expect(actual).toBeFalse();
})
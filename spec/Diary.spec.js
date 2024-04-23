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


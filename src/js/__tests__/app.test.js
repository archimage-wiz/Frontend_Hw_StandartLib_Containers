import {Character, Team, ErrorRepository} from '../app';

test('should add', () => {
    const char1 = new Character("John");
    const char2 = new Character("Jane");
    const char3 = new Character("Jane");

    const team = new Team();
    team.add(char1);
    team.add(char2);
    team.add(char3);
    team.add(char3);
    expect(team.toArray()).toEqual([char1, char2, char3]);
})


test('should give error', () => {
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(500)).toBe("Internal Server Error");
})


test('should give unknown error', () => {
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(999)).toBe("Unknown error");
})

// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('tests valid US phone number', () => {
    expect(functions.isPhoneNumber("707-775-1795")).toBe(true);
});
test('tests international phone number', () => {
    expect(functions.isPhoneNumber("2707-777-1795")).toBe(true); 
});
test('tests alphanumeric string', () => {
    expect(functions.isPhoneNumber("a07-75-1795")).toBe(false);
});
test('tests gibberish', () => {
    expect(functions.isPhoneNumber("77-7\sd.75-1795aaaa")).toBe(false);
});

test('tests valid email', () => {
    expect(functions.isEmail("gdubinin@ucsd.edu")).toBe(true);
});
test('test valid email with numbers', () => {
    expect(functions.isEmail("gd334ubinin@ucsd.edu")).toBe(true);
});
test('test email without \"@\"', () => {
    expect(functions.isEmail("gdubininucsd.edu")).toBe(false);
});
test('test email without \".\"', () => {
    expect(functions.isEmail("gdubinin@ucsdedu")).toBe(false);
});

test('tests short strong password', () => {
    expect(functions.isStrongPassword("a2_34324347")).toBe(true);
});
test('tests long strong password', () => {
    expect(functions.isStrongPassword("A34_bA34_bA34_b")).toBe(true);
});
test('tests password with disallowed characters', () => {
    expect(functions.isStrongPassword("A34_[]|||")).toBe(false);
});
test('test password with number first', () => {
    expect(functions.isStrongPassword("2A34_bA34_bA")).toBe(false);
});

test('test correct date single digits', () => {
    expect(functions.isDate("3/3/2009")).toBe(true);
});
test('test 2-digit days and months', () => {
    expect(functions.isDate("12/10/2010")).toBe(true);
});
test('tests date without slashes', () => {
    expect(functions.isDate("3  3  2009")).toBe(false);
});
test('test date with 4-digit numbers', () => {
    expect(functions.isDate("2345 / 3421 / 9999")).toBe(false);
});

test('test single character hex color', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
});
test('test random hex color', () => {
    expect(functions.isHexColor("3D5C3A")).toBe(true);
});
test('tests hex color with too few characters', () => {
    expect(functions.isHexColor("3D2AA")).toBe(false);
});
test('test date hex color with too many characters', () => {
    expect(functions.isHexColor("AB46243")).toBe(false);
});
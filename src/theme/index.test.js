import theme from '.';
import palette from './palette';
import typography from './typography';

it('should use theme defined palette', () => {
  expect(theme.palette.primary.main).toBe(palette.primary.main);
});

it('should use h1 typography defined by theme', () => {
  expect(theme.typography.h1.fontFamily).toBe(typography.fontFamily);
  expect(theme.typography.h1.fontSize).toBe(typography.h1.fontSize);
  expect(theme.typography.h1.fontWeight).toBe(typography.h1.fontWeight);
  expect(theme.typography.h1.lineHeight).toBe(typography.h1.lineHeight);
  expect(theme.typography.h1.letterSpacing).toBe(typography.h1.letterSpacing);
});

it('should use h2 typography defined by theme', () => {
  expect(theme.typography.h2.fontFamily).toBe(typography.fontFamily);
  expect(theme.typography.h2.fontSize).toBe(typography.h2.fontSize);
  expect(theme.typography.h2.fontWeight).toBe(typography.h2.fontWeight);
  expect(theme.typography.h2.lineHeight).toBe(typography.h2.lineHeight);
  expect(theme.typography.h2.letterSpacing).toBe(typography.h2.letterSpacing);
});

it('should use h3 typography defined by theme', () => {
  expect(theme.typography.h3.fontFamily).toBe(typography.fontFamily);
  expect(theme.typography.h3.fontSize).toBe(typography.h3.fontSize);
  expect(theme.typography.h3.fontWeight).toBe(typography.h3.fontWeight);
  expect(theme.typography.h3.lineHeight).toBe(typography.h3.lineHeight);
  expect(theme.typography.h3.letterSpacing).toBe(typography.h3.letterSpacing);
});

it('should use h4 typography defined by theme', () => {
  expect(theme.typography.h4.fontFamily).toBe(typography.fontFamily);
  expect(theme.typography.h4.fontSize).toBe(typography.h4.fontSize);
  expect(theme.typography.h4.fontWeight).toBe(typography.h4.fontWeight);
  expect(theme.typography.h4.lineHeight).toBe(typography.h4.lineHeight);
  expect(theme.typography.h4.letterSpacing).toBe(typography.h4.letterSpacing);
});

it('should use h5 typography defined by theme', () => {
  expect(theme.typography.h5.fontFamily).toBe(typography.fontFamily);
  expect(theme.typography.h5.fontSize).toBe(typography.h5.fontSize);
  expect(theme.typography.h5.fontWeight).toBe(typography.h5.fontWeight);
  expect(theme.typography.h5.lineHeight).toBe(typography.h5.lineHeight);
  expect(theme.typography.h5.letterSpacing).toBe(typography.h5.letterSpacing);
});

it('should use h6 typography defined by theme', () => {
  expect(theme.typography.h6.fontFamily).toBe(typography.fontFamily);
  expect(theme.typography.h6.fontSize).toBe(typography.h6.fontSize);
  expect(theme.typography.h6.fontWeight).toBe(typography.h6.fontWeight);
  expect(theme.typography.h6.lineHeight).toBe(typography.h6.lineHeight);
  expect(theme.typography.h6.letterSpacing).toBe(typography.h6.letterSpacing);
});

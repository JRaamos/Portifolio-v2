import styled from 'styled-components';
export const Arsenal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.xxl}`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
`;
export const Bars = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  div {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: ${({ theme }) => theme.spacing.sm};
    padding-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  div::before,
  i {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: ${({ theme }) => theme.sizes.line};
    border-radius: ${({ theme }) => theme.radius.pill};
  }
  div::before {
    width: 100%;
    background: ${({ theme }) => theme.colors.border.subtle};
  }
  i {
    background: ${({ theme }) => theme.gradients.accent};
  }
`;
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
export const Column = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.size.md};
  }
`;
export const SkillSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;
export const SkillPill = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.glass.surfaceStrong};
  color: ${({ theme }) => theme.colors.accent.soft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

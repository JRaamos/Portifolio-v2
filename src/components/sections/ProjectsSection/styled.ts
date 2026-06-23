import styled, { css } from 'styled-components';
import type { Project } from '../../../types/portfolio';

export const ProjectsHeader = styled.div`
  max-width: ${({ theme }) => theme.containers.narrow};
  margin-inline: auto;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  text-align: center;
  p {
    max-width: ${({ theme }) => theme.containers.text};
    margin: ${({ theme }) => `${theme.spacing.lg} auto 0`};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;
export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
const visual = {
  blue: 'projectBlue',
  indigo: 'projectIndigo',
  green: 'projectGreen',
  red: 'projectRed',
  amber: 'projectAmber',
  cyan: 'projectCyan',
} as const;
export const ProjectCard = styled.article<{ $visual: Project['visual'] }>`
  position: relative;
  display: flex;
  min-height: 31rem;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.lg};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal};
  small {
    margin-top: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.accent.soft};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  }
  h3 {
    margin: ${({ theme }) => `${theme.spacing.sm} 0 0`};
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
  ${({ $visual, theme }) => css`
    ${ProjectVisual} {
      background: ${theme.gradients[visual[$visual]]};
    }
  `} &:hover {
    transform: translateY(-0.35rem);
    border-color: ${({ theme }) => theme.colors.border.accent};
  }
`;
export const ProjectVisual = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.gradients.projectBlue};
  span {
    position: absolute;
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.colors.border.strong};
  }
  span:first-child {
    inset: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl} auto`};
    height: ${({ theme }) => theme.sizes.line};
  }
  span:nth-child(2) {
    right: ${({ theme }) => theme.spacing.xl};
    bottom: ${({ theme }) => theme.spacing.lg};
    width: 45%;
    height: ${({ theme }) => theme.sizes.line};
  }
  strong {
    position: absolute;
    left: ${({ theme }) => theme.spacing.xl};
    bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 4rem;
    opacity: 0.35;
  }
`;
export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.lg};
  span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;
export const CardActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  button {
    padding: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    background: transparent;
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    cursor: pointer;
  }
`;

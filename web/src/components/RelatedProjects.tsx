import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import site from '../seo/site.json';

const Navigation = styled.nav`
  background: #f7f8fc;
  color: #182238;
  padding: 3rem max(1.75rem, calc((100% - 1024px) / 2));

  h2 {
    font-size: 1.75rem;
    margin: 0 0 1.25rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    color: #244eaf;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
  a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 5px;
  }
`;

export function RelatedProjects({
  currentPath,
}: {
  currentPath: keyof typeof site.pages;
}) {
  const projects = Object.entries(site.pages).filter(
    ([path]) => path.startsWith('/case-studies/') && path !== currentPath
  );
  return (
    <Navigation aria-label="More projects">
      <h2>More projects</h2>
      <ul>
        {projects.map(([path, project]) => (
          <li key={path}>
            <Link href={path}>
              <a>{project.label} case study</a>
            </Link>
          </li>
        ))}
      </ul>
    </Navigation>
  );
}

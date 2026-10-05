import type { CSSProperties } from "react";
import type { Portfolio } from "@/lib/types";
import { Section } from "../ui/Section";
import { Icon } from "../ui/Icon";
import { SkillLogo } from "../ui/SkillLogo";
import { Code2, Sparkles } from "lucide-react";

const categoryIcons: Record<string, string> = {
  "Frontend Development": "code",
  "UI & Styling": "palette",
  "Testing & Documentation": "flask",
  "CI/CD & Version Control": "git",
  "Python & AI Agent Development": "sparkles",
  "AI Development Tools": "sparkles",
};

const skillLogos: Record<string, [string, string]> = {
  "HTML5": ["html5", "E34F26"], "CSS3": ["css3", "1572B6"], "JavaScript": ["javascript", "F7DF1E"], "ES5/ES6": ["javascript", "F7DF1E"],
  "TypeScript": ["typescript", "3178C6"], "React.js": ["react", "61DAFB"], "Next.js": ["nextdotjs", "FFFFFF"], "Redux Toolkit": ["redux", "764ABC"],
  "Axios": ["axios", "5A29E4"], "Ag Grid": ["aggrid", "F9AB00"], "Tailwind CSS": ["tailwindcss", "06B6D4"], "Bootstrap": ["bootstrap", "7952B3"],
  "Sass": ["sass", "CC6699"], "Material UI": ["mui", "007FFF"], "Ant Design": ["antdesign", "0170FE"], "Styled Components": ["styledcomponents", "DB7093"],
  "React Bootstrap": ["reactbootstrap", "41E0FD"], "Jest": ["jest", "C21325"], "React Testing Library": ["testinglibrary", "E33332"], "Storybook": ["storybook", "FF4785"],
  "Git": ["git", "F05032"], "GitHub": ["github", "FFFFFF"], "GitLab": ["gitlab", "FC6D26"], "Jenkins": ["jenkins", "D24939"], "SonarQube": ["sonarqube", "4E9BCD"],
  "Python": ["python", "3776AB"], "Ollama": ["ollama", "FFFFFF"], "Qwen": ["qwen", "615CED"],
  "Cursor": ["cursor", "FFFFFF"], "GitHub Copilot": ["githubcopilot", "FFFFFF"], "Claude": ["anthropic", "D97757"],
};

const skillAccentMap: Record<string, string> = {
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "React.js": "#61DAFB",
  "Next.js": "#FFFFFF",
  "Redux Toolkit": "#764ABC",
  "Tailwind CSS": "#06B6D4",
  "Bootstrap": "#7952B3",
  "Sass": "#CC6699",
  "Material UI": "#007FFF",
  "Ant Design": "#0170FE",
  "Styled Components": "#DB7093",
  "Git": "#F05032",
  "GitHub": "#FFFFFF",
  "GitLab": "#FC6D26",
  "Jenkins": "#D24939",
  "SonarQube": "#4E9BCD",
  "Cursor": "#FFFFFF",
  "GitHub Copilot": "#FFFFFF",
  "Claude": "#D97757",
  "Python": "#3776AB",
  "Ollama": "#FFFFFF",
  "Qwen": "#615CED",
};

export function TechStack({ data }: { data: Portfolio["skills"] }) {
  return (
    <Section id="skills" title={data.title} subtitle={data.subtitle} icon="code" className="border-y border-border bg-surface">
      <div className="space-y-6">
        {data.groups.map((group) => (
          <div key={group.category}>
            <h3 className="group mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/10 transition-transform duration-300 group-hover:rotate-6">
                <Icon name={categoryIcons[group.category]} size={15} />
              </span>
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((t) => {
                const accent = skillAccentMap[t] ?? "rgb(var(--primary))";
                const style = { ["--skill-accent" as string]: accent } as CSSProperties;

                return (
                  <li
                    key={t}
                    tabIndex={0}
                    aria-label={`${t} skill`}
                    title={`Key skill: ${t}`}
                    className="skill-pill group cursor-default rounded-lg px-3 py-2 text-sm"
                    style={style}
                  >
                    <span className="skill-content flex items-center gap-2">
                      {skillLogos[t] ? (
                        <SkillLogo
                          src={`https://cdn.simpleicons.org/${skillLogos[t][0]}/${skillLogos[t][1]}`}
                          label={t}
                        />
                      ) : t === "AI Agent Development" ? (
                        <Sparkles className="skill-icon h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Code2 className="skill-icon h-4 w-4" aria-hidden="true" />
                      )}
                      {t}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

# Prompt 16: Deep Explanation of Project

**What it does**: Forces the AI to explain every technology, tool, and line of code deeply rather than just giving code.

**When to use**: When you want to deeply understand why certain technologies were chosen and how the overall stack connects.

---

Copy this into Copilot Chat:

I am building this project using AI assistance, but I do not want only code.

I want deep understanding.

For every technology, library, or tool you use:

1. Explain WHAT it is.
2. Explain WHY we are using it in this project.
3. Explain HOW it works internally (in simple terms).
4. Explain WHAT PROBLEM it solves.
5. Explain WHAT would happen if we did not use it.
6. Explain ALTERNATIVES and when they are better.
7. Explain how it connects to the overall system architecture.

When writing code:

- Comment on important lines.
- Explain what each section is doing.
- Explain how data flows through the system.
- Explain how frontend talks to backend.
- Explain how backend talks to database.

After completing each major part:

- Summarize what we built.
- Explain how this would work in a real production environment.
- Mention security concerns if any.
- Mention performance considerations if any.

Do not assume I know hidden concepts.
If you use technical terms (like middleware, virtual DOM, JWT, bundler), explain them simply.

My goal is not to finish fast.
My goal is to understand the full stack architecture deeply.

# Prompt 17: System Architecture Request

**What it does**: Asks the AI to break down the entire architecture layer by layer.

**When to use**: Right after the project is scaffolded or whenever you need a mental model of how the entire system functions together.

---

Copy this into Copilot Chat:

Now explain the full system architecture of this project like a senior software engineer would.

Break it into layers:
- Client layer
- Server layer
- Database layer
- Communication layer

Explain:
- Request flow from user action to database and back.
- Where state lives.
- Where validation happens.
- Where security risks exist.
- How this would scale to 10,000 users.
- How this would be deployed in production.

Also explain what part is frontend responsibility vs backend responsibility.

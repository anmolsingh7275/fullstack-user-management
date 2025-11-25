# API Documentation & Scaling Notes

## 🔐 Authentication APIs

### POST /api/auth/register
Registers a user.

**Body**
```json
{
  "name": "Anmol",
  "email": "anmol@example.com",
  "password": "123456"
}
```

---

### POST /api/auth/login
Logs in a user.

**Body**
```json
{
  "email": "anmol@example.com",
  "password": "123456"
}
```

**Returns**
- user
- JWT token

---

## 📝 Notes APIs (Protected)
Add header:
```
Authorization: Bearer <token>
```

### GET /api/notes
Fetch all notes.

### POST /api/notes
Create a note.

**Body**
```json
{
  "title": "Sample Note",
  "content": "This is a test note"
}
```

### PUT /api/notes/:id
Update a note.

### DELETE /api/notes/:id
Delete a note.

---

# Scaling Notes (Short & Practical)

### Frontend
- Use React Query/SWR for cached API calls.
- Break UI into reusable components.
- Add environment-based config for API URLs.
- Implement route-based code splitting.

### Backend
- Add validation for all inputs.
- Add refresh tokens for long sessions.
- Use rate limiting to prevent abuse.
- Centralize error handling and logs.

### Database
- Add indexes on email & owner IDs.
- Use MongoDB Atlas monitoring tools.
- Split collections if app grows.

### Deployment
- Host frontend on Vercel / Netlify.
- Host backend on Render / Railway / AWS.
- Use CI/CD pipelines for auto deploy.
- Add reverse proxy (NGINX) for routing.

### Security
- Enable HTTPS in production.
- Limit allowed domains via CORS.
- Add password reset + email verification.
- Store JWT securely.

### API Versioning
Use:
```
/api/v1/auth
/api/v1/notes
```

That’s it — short, clean, and submission-ready.

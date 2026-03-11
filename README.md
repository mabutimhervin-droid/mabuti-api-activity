# RESTful API Activity - Mhervin Mabuti

## Best Practices Implementation

**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?  
- Answer:  
  We placed `BASE_URI` in the `.env` file to make the application flexible and easier to maintain.  
  This allows us to change the base URL without modifying the source code and follows best practices for configuration management and security.

---

**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/rooms`) for our routes?  
- Answer:  
  Plural nouns represent a collection of resources. Using `/rooms` clearly indicates that the endpoint handles multiple room records and follows REST API naming conventions.

---

**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?  
- Answer:  
  `201 Created` is used when a new resource is successfully added to the system, such as creating a new room.  
  `200 OK` is used when a request is successful but does not create a new resource, such as fetching or updating data.

- Why is it important to return `404` instead of just an empty array or a generic error?  
- Answer:  
  Returning `404 Not Found` clearly tells the client that the requested resource does not exist.  
  This helps in debugging and ensures proper error handling instead of giving misleading results.

---

**4. Testing:**
- (Paste a screenshot of a successful GET request here)


**Hands-on Activity3**

- Why did I choose to Embed the [Review/Tag/Log]?
- Answer: 
Embed stores and update the data in another file
- Why did I choose to Reference the [Chef/User/Guest]?
- Answer:

Connects the 2 files

**1. Authentication vs Authorization**

**Q:** What is the difference between Authentication and Authorization in our code?
**A:** Authentication verifies the identity of the user by checking their login credentials such as username and password. Authorization determines what actions the authenticated user is allowed to perform, such as accessing protected routes or specific resources in the API.

---

**2. Security (bcrypt)**

**Q:** Why did we use bcryptjs instead of saving passwords as plain text in MongoDB?
**A:** We use bcryptjs to hash passwords before storing them in the database. This improves security because even if the database is compromised, the actual passwords cannot be easily read. Hashing protects user credentials by converting them into encrypted strings that are difficult to reverse.

---

**3. JWT Structure**

**Q:** What does the protect middleware do when it receives a JWT from the client?
**A:** The protect middleware verifies the JWT sent by the client to ensure it is valid and not expired. If the token is valid, the middleware decodes the token, identifies the authenticated user, and allows access to protected routes. If the token is missing or invalid, the request is denied.

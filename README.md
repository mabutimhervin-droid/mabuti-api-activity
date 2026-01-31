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

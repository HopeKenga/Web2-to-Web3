The postman collection can be imported through this link [Postman](https://www.postman.com/collections/71f2948fdc99c3ecf625).
Technologies applied


```1.TypeScript```

TypeScript has its pros and cons but the cons weigh much more. One of it's biggest advantages is it's ability to flag developmental bugs way before they cause major issues and time consumption something lightly reffered to as Optional Static Typing. Types can be added to variables, functions, properties, etc. This will help the compiler and show warnings about any potential errors in code, before an app is ever run. Types also help when using libraries and frameworks, as they let developers know exactly what type of data APIs expect. The key thing to remember about the type system is that it is optional. TypeScript does not force developers to add types they don’t want to add. However, as an app gets larger and more complex, types can provide some great advantages.

```2. NX```

Nx is a modular build framework for architecting and maintaining code projects. Using it means you configure once, then just focus on build your tools and apps. Nx can effectively manage the configuration around APIs, micro frontends and libraries of tools, so you don’t have to consciously think of this step each time it comes to building a new project.
When it comes to versioning all of our apps consume a single version of a library, and that’s updated every time there’s a merge to master.
This means there’s less risk of unexpected breaking changes, and no sprints wasted bumping library versions: it’s all done once, at the same time the library is modified. This could also help changes to the API of a library to be more robust, because it’s being consumed immediately, and not after some time has already passed and other teams have begun to implement the change

```3. Prisma```
Prisma is the only fully type-safe ORM in the TypeScript ecosystem. The generated Prisma Client ensure typed query results even for partial queries and relations. You can learn more about this in the type-safety comparison with TypeORM. One is bale to create types directly from the schema.In a collaborative environment , Prisma schema provides an overview of the current state of the database that's easy to understand for everyone.


```4. JWT & Passport```
Passport JS is authentication middleware for Node and Express JS. Passport JS can be used with any Express JS applications. It provides us with a strategy called Passport JWT that helps us to make authenticated requests and also to verify if the token is valid or not.JSON web tokens provide a secure way of creating authentication for APIs. An extra layer of security can be added by encrypting all the information within the token, thereby making it even more secure.

Approaches and understanding

```Code versioning```
My approach is normally to separate developemt into 3 sections: 
1 development - If developing module per module, I'll group them in branches
Or is it about moving from version 1 to 2. When moving from version one to two. From having zero code to having. a complete product.
For example( task 1 - Auth and Secret retrival) . Once each is done push to the branch. Mainly have three brances, development, staging and production. 
Once a code is done in each stage and thoroughly reviewed it is then merged into the next branch. Then in staging , we thouroughly test then reviewe and move into production.I was not able to apply this in the task but this would be my approach on a daily basis.



```Decentralization``` 
Centralization of data - Has its pros and cons . Its easier to defend one house than to defend 50 houses. Con - single point of failure , incase if anything , you end losing all your data. 
Centralization of control - lack of monopoly in decision making when it comes to user related decisions.
Encoding and decoding- needs a key for encoding .
I was able to use Polkadot.js in task 2 and 3 to demonstrate my understanding of decentralization and security.


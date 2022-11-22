# Requirements

## User Needs

### User stories
- As a tourist visiting Bristol, I'd like the option to quickly and efficiently relieve myself when exploring the new environment so that I can spend the most time possible experiencing new things rather than stressing.
- As a student within the city, I'd enjoy having the option to easily find a toilet when outside between lessons/lectures to avoid rushing and/or stressing.
- As a taxi driver, I'd really like the option of relieving myself on the go whilst simultaneously planning the location based on customer needs to ensure the best experience for both of us.


### Actors
Citizens of Bristol (Students, Workers, Maintainers), Tourists, Council

### Use Cases

| UC1 | Users which require the toilets | 
| -------------------------------------- | ------------------- |
| **Description** | Members of general public of Bristol require the location of the nearest public toilet near them. |
| **Actors** | General Public (Students, Workers) |
| **Assumptions** | Assumption that user is already in Bristol but could be checking to plan trip.</td></tr>
| **Steps** | A: Share their location with system or B: Manually enter X location to scout nearest toilets |
| **Variations** | Users may not wish to share their data. |
| **Non-functional** | Supply the user with nearest (1 or multiple) locations of public toilets around given location provided by user. |
| **Issues** | If user is really far from a public toilet, could possibly supply with bus routes based on open data. |

| UC2 | TODO: USE-CASE NAME *For example, you could do Traffic Analysis ( businesses and council can see where most people go -> lets them make business desitions blah blah )* | <- *Ismail* just do your one here>
| -------------------------------------- | ------------------- |
| **Description** | TODO: Goal to be achieved by use case and sources for requirement |
| **Actors** | TODO: List of actors involved in use case |
| **Assumptions** | TODO: Pre/post-conditions if any</td></tr>
| **Steps** | TODO: Interactions between actors and system necessary to achieve goal |
| **Variations** | TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |
  

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
FR1: Make use of Open Data Bristol dataset for public toilet locations on the map available.
FR2: Obtain a user location; whether it be *theirs* or a location given e.g. postcode.
FR3: Compare the user location supplied together with the distances to the nearest (e.g.) 3 toilets around them.
FR4: Be able to supply the user with directions to these locations AND (if applicable) tell the user the name of the facility which the toilet is inside of.




### Non-Functional Requirements
NFR1: Tell user change of ground level when supplying directions. (if they'll be walking up/downhill)
NFR2: Supply the user with an ETA.
NFR3: Allow users to rate different locations based on variety of properties such as:
   - Difficulty to find
   - Hygiene 
   - How busy

NFR4: Allow the user to choose routes based on different factors e.g.
   - Selection by special need e.g. disabled / baby 
   - Least turns
   - Not uphill and/or least level change
   - Shortest ETA
   - Least traffic (aka least busy toilet)



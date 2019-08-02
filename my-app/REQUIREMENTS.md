# research blog


## Contents
- [Requirements](##Requirements)
- [Home](###Home)
- [Index page](###Index-page)
- [Detailpage](###Detailpage)
- [Animation language](###Animation-language)
- [Database](###Database)

## Requirements

### Home
  - It should have a design that uses elements from the   initial homepage.
  - this should be a simple page with an about me & and/or why i am keeping this.
  - Something about writing it off yourself.
  - Because i have some medium articles i need to connect those to the website? link widget API?
  - Design wise
    - Keep it light, use flex grid to create the space of content and nothing.
    - READABILITY comes first {{ Readability for }}
    - research your design choices so you have something to post on day of launch.

### Index page
- It should have a index that every page has an primary color and it will create an small “what it is about”
	- What it is about:
		- it should have an small summary `{{ object }}` which contains:
      ```json
        {
          "id": "0987-098765432-2345-3456",
          "title": "Something something Darkside",
          "url": "to link it somewhere probably the route",
          "summary": "this is a short summary that wouldn't be shown on the page + Summary will be a part of the story",
          "tags": ["tags","that","will","make","this","searchable"]
        }
      ```
      - behaviour (click on the title) -> go to page. There should be a summary or '?' button.

### Detailpage
    - This design should be a unique form of recognizing parts from the home page.
    - Atomic design could be the answer for this...
      - _(probably will use this for assets but they need to be dynamic. Everything a custom component doesn't sound like the way to go)_
    - || customs designs which could be a nice way of flexing the UX and Design muscle.

### Animation language
    - *For now keep it sublte and minimal*
      - When it's live and well, you should create a nice way of researching and displaying the choices.

### Database
  - Probably going to use mongoDB `if needed ofcouse`.
  - need to create an Api to make the calls to.
    - mySQL, Node, expressJS (!)


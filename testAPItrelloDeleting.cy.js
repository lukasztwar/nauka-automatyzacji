describe('trello API', () =>{

    const apiKey = '4ddb9f35cf195890a4286d7b14d19b79'
    const apiToken = '550f0a9c38dfb730db8566c61e2d1ea910da35a8a2c46e0ba71404c62b3e3312'

    it('kasowanie wszystkich tablic', () =>{

        cy.request({
            method: 'GET',
            url: `https://api.trello.com/1/members/ukaszt3/boards?key=${apiKey}&token=${apiToken}`
        }).then((response) => {
            response.body.forEach((board) => {
                cy.request({
                    method: 'DELETE',
                    url: `https://api.trello.com/1/boards/${board.id}?key=${apiKey}&token=${apiToken}`
                })
            })  
        })
    })
}) 


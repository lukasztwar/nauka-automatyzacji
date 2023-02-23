
describe('trello API', () =>{

    const apiKey = '4ddb9f35cf195890a4286d7b14d19b79'
    const apiToken = '550f0a9c38dfb730db8566c61e2d1ea910da35a8a2c46e0ba71404c62b3e3312'
    const boardName = 'moja 1'
    const cardName = 'test'
    const cardDesc = 'tresc'
    

    it('tworzenie tablicy "moja 1"', () =>{

        //LOG.login()

        cy.request({
            method: 'POST',
            url: `https://api.trello.com/1/boards?key=${apiKey}&token=${apiToken}&name=${boardName}`

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(boardName)
        })      
        
    })

    it('tworzenie listy "Nowa"', () =>{

        cy.request({
            method: 'GET',
            url: `https://api.trello.com/1/members/ukaszt3/boards?key=${apiKey}&token=${apiToken}`,
            qs: {fields: 'id,name'}


        }).then((response) => {
            const board = response.body.find(b => b.name === 'moja 1')
            const boardId = board.id
        
            cy.log(`Board ID: ${boardId}`)

            cy.request({
                method: 'POST',
                url: `https://api.trello.com/1/lists`,
                qs: {
                    idBoard: boardId,
                    name: 'Nowa',
                    
                    key: apiKey,
                    token: apiToken 
                }

            }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Nowa')
            
            })
        })


    })

    it('dodanie karty "Nowa karta"', () =>{

        cy.request({
            method: 'GET',
            url: `https://api.trello.com/1/members/ukaszt3/boards?key=${apiKey}&token=${apiToken}`,
            qs: {fields: 'id,name'}


        }).then((response) => {
            const board = response.body.find(b => b.name === 'moja 1')
            const boardId = board.id
           

        cy.request({
            method: 'GET',
            url: `https://api.trello.com/1/boards/${boardId}/lists`,
            qs: {key: apiKey,
                token: apiToken}
        }).then((response) => {
            const list = response.body.find(l => l.name === 'Nowa')
            const listId = list.id

            cy.request({
                method: 'POST',
                url: `https://api.trello.com/1/cards`,
                qs: {
                    idList: listId, 
                    name: 'Nowa karta',
                    desc: 'opis',
                    pos: 'bottom',
                    key: apiKey,
                    token: apiToken
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('Nowa karta')
                expect(response.body.desc).to.eq('opis')
                expect(response.body.idList).to.eq(listId)
            })
        })
    }) 

    })

    it('usuń kartę "Nowa karta"', () =>{

        cy.request({
            method: 'GET',
            url: `https://api.trello.com/1/members/ukaszt3/boards?key=${apiKey}&token=${apiToken}`,
            qs: {fields: 'id,name'}


        }).then((response) => {
            const board = response.body.find(b => b.name === 'moja 1')
            const boardId = board.id
           
            cy.request({
                method: 'GET',
                url: `https://api.trello.com/1/boards/${boardId}/lists`,
                qs: {key: apiKey, token: apiToken}
            }).then((response) => {
                const list = response.body.find(l => l.name === 'Nowa')
                const listId = list.id

                cy.request({
                    method: 'GET',
                    url: `https://api.trello.com/1/lists/${listId}/cards`,
                    qs: {
                    key: apiKey,
                    token: apiToken
                    }
                }).then((response) => {
                    const card = response.body.find(c => c.name === 'Nowa karta')
                    const cardId = card.id

                    cy.request({
                    method: 'DELETE',
                    url: `https://api.trello.com/1/cards/${cardId}`,
                    qs: {
                        key: apiKey,
                        token: apiToken
                    }
                    }).then((response) => {
                    expect(response.status).to.eq(200)
                    })
                })
            })
        })  
    })
})    



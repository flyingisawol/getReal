// SEARCH
router.get('/merchants/search', async (req, res) => {
    const filters = req.query.Search 
    const merchants = await Merchants.find()
    let resultsArray = []
    for (merchant of merchants) {
        for (key in merchant) {
            if (Array.isArray(merchant[key])) {
                for (propertyArrayItem of merchant[key]) {
                    console.log(propertyArrayItem)
                    const regex = new RegExp(filters, 'i')
                    if (regex.test(propertyArrayItem)) {
                        if (!resultsArray.includes(merchant[key])) {
                            resultsArray.push(merchant)
                        }
                    }
                }
            } else {
                const regex = new RegExp(filters, 'i') //changes search form entry to case insensitive substring
                if (typeof merchant[key] === 'string' && regex.test(merchant[key])) { // tests if true and add to arry
                    if (!resultsArray.includes(merchant[key])) {
                        resultsArray.push(merchant)
                    }

                }
            }
        }
    } 
    if (resultsArray.length === 0) {
        res.render('nosearchresult.ejs') 
    } else {
        res.render('all.ejs', {
        lnmerch: resultsArray
    })
    }
})
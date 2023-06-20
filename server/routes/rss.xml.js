import RSS from 'rss';  // this package does not have type

export default defineEventHandler(async (event) => {

    const domain = "blog.jacky.fan"
    
    let response = await fetch(`https://${domain}/api/_content/query`, {method: "GET"})
    let responseJSON = await response.json()

    // sort by created_date desc
    responseJSON = responseJSON.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime())

    const data = await new Promise(async (resolve, reject) => {
        try {
            const feed = new RSS({
                title: "Jacky FAN's Blog",
                site_url: `https://${domain}`,
                feed_url: `https://${domain}/rss.xml`
            })

            for (const doc of responseJSON) {
                feed.item({
                    title: doc.title ?? '-',
                    url: `https://${domain}${doc._path}`,
                    date: doc.created_date,
                    pubDate: doc.created_date,
                    description: doc.description
                })
            }

            resolve(feed.xml({indent: true}))

        } catch (error) {
            reject(error);
        }
    })

    setResponseHeaders(event, { "content-type": "text/xml" });
    return data;
});

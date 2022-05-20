import { INbuData } from "./INbuData"

export async function getNbuData(): Promise<Array<INbuData>> {
    const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
    return fetch(url).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`Getting data from ${url} - FAILED!`)
        }
    }).then((json) => {
        return json
    })
}
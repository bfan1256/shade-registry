import algoliasearch from 'algoliasearch'
import { SearchIndex } from 'algoliasearch'
import { Hit } from '@algolia/client-search'
import { useEffect, useState } from 'react'

export const client = algoliasearch('IRPLTGJPSZ', 'cf6e85e8a3369b9dd5ac0b861feb0fe3')

export const useAlgoliaSearch = <T>(index?: SearchIndex, query?: string, limit?: number): Hit<T>[] => {
    const [result, setResult] = useState<Hit<T>[]>([])
    useEffect(() => {
        if (!index) return
        index.search<T>(query ?? '', limit ? { hitsPerPage: limit } : undefined)
            .then(res => setResult(res.hits))
    }, [index?.indexName, query, limit, index])
    return result
}


export const REGISTRY_INDEX = client.initIndex('registry')
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../../core/axios-base-query'
import { FEED_PAGE_SIZE } from '../consts'
import { GlobalFeedInDTO } from './dto/global-feed.in'
import { PopularTagsInDTO } from './dto/popular-tags.in'

interface GlobalFeedParams {
	page: number
}

export const feedApi = createApi({
	reducerPath: 'feedApi',
	baseQuery: axiosBaseQuery({
		baseUrl: 'https://api.realworld.io/api',
	}),
	endpoints: builder => ({
		getGlobalFeed: builder.query<GlobalFeedInDTO, GlobalFeedParams>({
			query: ({ page }) => ({
				url: '/articles',
				method: 'get',
				params: {
					limit: FEED_PAGE_SIZE,
					offset: FEED_PAGE_SIZE * page,
				},
			}),
		}),
		getPopularTags: builder.query<PopularTagsInDTO, any>({
			query: () => ({
				url: '/tags',
				method: 'get',
			}),
		}),
	}),
})

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi

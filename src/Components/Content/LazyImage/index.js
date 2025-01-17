import React from "react"
import blackBackground from "../../../Utilities/img/black.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { CONSUMET_CORS } from "../../../constants"
function LazyImage({ page, provider }) {
	return (
		<>
			<LazyLoadImage
				className="aspect-[2/3]"
				src={
					provider === "mangareader"
						? page.img
						: provider === "mangadex"
						? `${CONSUMET_CORS}url=${page.img}&referer=https://mangadex.org`
						: `${CONSUMET_CORS}url=${page.img}&referer=${page?.headerForImage?.Referer}`
				}
				alt={page.title}
				placeholderSrc={blackBackground}
				effect={"opacity"}
				threshold={700}
			/>
		</>
	)
}

export default LazyImage

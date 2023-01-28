import React from "react"
import { Link } from "react-router-dom"

function FilmsContent({ loading, films }) {
	return (
		<>
			<div>
				<div className="md:px-12 lg:px-20 xl:px-28 2xl:px-36 w-full pb-12 grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
					{loading
						? "Loading"
						: films &&
						  films.map((item) => (
								<Link
									to={`/info${item.url}`}
									title={item.name}
									key={item.name}
									className="mx-[4px] mb-[12px] relative float-left group"
								>
									<div className="pb-[148%] mb-0 w-100 relative overflow-hidden rounded-[4px] group-hover:opacity-70 duration-500 ease-in-out">
										<img
											className="top-0 left-0 right-0 bottom-0 absolute w-100 min-h-full"
											src={item.thumbnail}
											alt=""
										/>
										<div className="absolute right-[10px] top-[10px] bg-[#fff] text-[#000] rounded-[4px] px-[5px] py-[3px] font-medium text-xs inline-block leading-none">
											{item.quality}
										</div>
									</div>
									<div className="h-[60px] w-100">
										<p className="line-clamp-1 font-bold text-xs leading-none p-0 m-0 duration-500 ease-in-out">
											{item.name}
										</p>
										<div className="flex items-center justify-between my-[6px]">
											<div className="flex items-center">
												<p className="inline-block text-xs text-[#6d7583] leading-none p-0 m-0">
													{item.firstInfo}
												</p>
												<span className="dot w-[3px] h-[3px] mx-[6px] rounded-[50%] inline-block bg-[#6d7583]"></span>
												<p className="inline-block text-xs text-[#6d7583] leading-none p-0 m-0">
													{item.secondInfo}
												</p>
											</div>
											<div className="flex">
												<p className="inline-block text-xs text-[#6d7583] leading-none m-0 p-[2px] border-solid	border border-inherit rounded-[4px]">
													{item.type}
												</p>
											</div>
										</div>
									</div>
								</Link>
						  ))}
				</div>
			</div>
		</>
	)
}

export default FilmsContent

{
	/* <div className="group-hover:opacity-70 relative aspect-w-2 aspect-h-3 duration-300 ease-linear w-100">
</div> */
}
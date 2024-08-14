import Script from 'next/script'


export default function Example() {
    return (
        <div className="relative isolate bg-white px-6 py-10 sm:py-18 lg:px-8">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-JonesCo-Blue-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="50%"
                        y={-64}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-64} className="overflow-visible fill-JonesCo-Blue-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
            <div className="mx-auto max-w-xl lg:max-w-4xl">
                <div id="1b0129bf-9730-46bf-9d7c-a34501f74690"></div>
                <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
                <Script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="1b0129bf-9730-46bf-9d7c-a34501f74690" form_url="https://clienthub.getjobber.com/client_hubs/1b0129bf-9730-46bf-9d7c-a34501f74690/public/work_request/embedded_work_request_form" />
            </div>
        </div>
    )
}

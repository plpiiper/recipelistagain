import '@/styles/globals.css'
export default function Head({Title}){
    return <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="desc" />
        <meta name="keywords" content="keywords" />
        {Title !== undefined ? <title>{"SiteName - " + Title}</title> : <></>}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400&family=Julius+Sans+One&family=Kumbh+Sans:wght@300;400&family=Smooch+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    </head>
}
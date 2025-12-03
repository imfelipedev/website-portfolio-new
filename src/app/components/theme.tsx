export default function Theme() {
    return (
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(){try{const t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
                }}
            />
        </head>
    );
}

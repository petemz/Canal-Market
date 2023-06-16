const Tailend = ({ setIsModal }) => {
    return (
        <>  
            <div className='text-center flex flex-col justify-center items-center py-16 px-16 mx-16 poll'>
                <p className='text-[46px] mb-8 leading-[60px]'>Interested in becoming a vendor?</p>
                <button
                    onClick={() => setIsModal(true)}
                    className='transition ease-in-out duration-300 hover:bg-black hover:text-white border tracking-widest font-semibold border-black py-3 px-10'
                >
                    click here
                </button>
            </div>

            <div className="p-16 pb-8">
                <div className='mb-14 grid grid-cols-3 gap-16 font-semibold text-center tracking-5'>
                    <div className='h-48 loop flex flex-col tracking-widest justify-center items-center'>
                        <div className='h-7 w-7 mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                <g><path d="m62.542 7.093-5.635-5.635a4.99 4.99 0 0 0-7.05 0L4.52 46.796a1 1 0 0 0-.258.444L.035 62.737a1 1 0 0 0 1.228 1.228l15.497-4.226a1 1 0 0 0 .444-.258l45.338-45.339a4.99 4.99 0 0 0 0-7.049zM10.555 47.805l-3.372-.843L43.52 10.623l2.108 2.108zm1.307 1.521 35.18-35.18 2.813 2.811-35.181 35.181h-2.812zm4.334 4.119L51.269 18.37l2.108 2.108-36.338 36.338zM44.935 9.209l1.403-1.404 9.857 9.857-1.404 1.403zM5.934 48.71l3.928.982v3.445a1 1 0 0 0 1 1h3.445l.982 3.928-5.946 1.622a10.479 10.479 0 0 0-2-3.03 10.479 10.479 0 0 0-3.031-2zm-2.157 7.906a8.058 8.058 0 0 1 2.151 1.455 8.059 8.059 0 0 1 1.455 2.15l-4.958 1.353zm57.351-43.889-3.52 3.52-9.856-9.857 3.52-3.52a3.057 3.057 0 0 1 4.22 0l5.636 5.636a2.985 2.985 0 0 1 0 4.221z" fill="#000000" data-original="#000000" class=""></path></g>
                            </svg>
                        </div>
                        <p>Email us</p>
                    </div>

                    <div className='h-48 loop flex flex-col tracking-widest justify-center items-center'>
                        <div className='h-7 w-7 mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                <g><path d="M.473 19.595a13.928 13.928 0 0 0 7.478 2.155c3.91 0 7.493-1.502 10.09-4.229 2.485-2.61 3.852-6.117 3.784-9.676.942-.806 2.05-2.345 2.05-3.845a.75.75 0 0 0-1.13-.647c-.885.52-1.692.656-2.522.423-1.695-1.652-4.218-2-6.344-.854-1.858 1-2.891 2.83-2.798 4.83A12.427 12.427 0 0 1 3.02 3.349a.75.75 0 0 0-1.226.1C.82 5.117.83 7.05 1.677 8.611a.78.78 0 0 0-.652.777 5.29 5.29 0 0 0 1.843 3.995.749.749 0 0 0-.192.777 5.384 5.384 0 0 0 3.047 3.264 8.732 8.732 0 0 1-4.756.794c-.784-.106-1.171.948-.494 1.377zm7.683-1.914c.561-.431.263-1.329-.441-1.344a3.912 3.912 0 0 1-3.072-1.598 5.29 5.29 0 0 0 1.024-.164c.761-.206.725-1.304-.048-1.459a3.85 3.85 0 0 1-2.917-2.62c.377.093.761.145 1.144.152.759.004 1.046-.969.427-1.376-1.395-.919-1.99-2.542-1.596-4.068a13.943 13.943 0 0 0 9.237 4.123.749.749 0 0 0 .767-.917c-.475-2.059.675-3.502 1.91-4.167 1.222-.66 3.184-.866 4.688.712.447.471 1.955.489 2.722.31-.344.648-.873 1.263-1.368 1.609a.75.75 0 0 0-.319.651c.161 3.285-1.063 6.551-3.358 8.96-2.312 2.427-5.509 3.764-9.004 3.764-1.39 0-2.753-.226-4.041-.662 1.54-.298 3.003-.95 4.245-1.906z" fill="#000000" data-original="#000000" class=""></path></g>
                            </svg>
                        </div>
                        <p>Follow us <br/> on Twitter</p>
                    </div>

                    <div className='h-48 loop flex flex-col tracking-widest justify-center items-center'>
                        <div className='h-7 w-7 mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 512.005 512.005" style={{ enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                <g>
                                    <path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0" fill="#000000" data-original="#000000" class=""></path>
                                    <path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zM399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0" fill="#000000" data-original="#000000" class=""></path>
                                </g>
                            </svg>
                        </div>
                        <p>Follow us <br/> on Instagram</p>
                    </div>
                </div>

                <div className='p-7 px-16 flex justify-between items-center loop'>
                    <p className='text-[22px] mr-16 flex-shrink-0'>Stay up to date <br/> with our newsletter</p>
                    
                    <div className='relative w-full max-w-[700px] '>
                        <div className='h-6 w-6 top-0 bottom-0 m-auto right-8 absolute'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 512 511" style={{ enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                <g transform="matrix(-1,-1.224646799147353e-16,1.224646799147353e-16,-1,511.9999999999999,512.9840087890625)"><path d="M143.871 512.484c-10.398 0-20.598-4.062-28.281-11.734l-97.961-97.754C6.262 391.652 0 376.562 0 360.504s6.262-31.152 17.629-42.496l97.96-97.754c11.513-11.492 28.665-14.887 43.696-8.652 15.012 6.226 24.711 20.742 24.711 36.976V340.5C342.801 340.5 472 211.3 472 52.496V20.5c0-11.047 8.953-20 20-20s20 8.953 20 20v31.996c0 87.613-34.117 169.984-96.07 231.938-61.953 61.949-144.32 96.07-231.934 96.07-22.059 0-40.004-17.945-40.004-40v-91.938a.85.85 0 0 0-.105-.043c-.012.016-.028.028-.043.043l-97.961 97.758A19.9 19.9 0 0 0 40 360.504a19.9 19.9 0 0 0 5.883 14.18l97.96 97.753.044.043c.035-.011.074-.023.105-.039v-21.937c0-11.047 8.957-20 20.004-20 11.043 0 20 8.953 20 20v21.922c0 16.234-9.7 30.75-24.71 36.976a40.16 40.16 0 0 1-15.415 3.082zm0 0" fill="#000000" data-original="#000000"></path></g>
                            </svg>
                        </div>
                        <input className='h-14 px-8 w-full tracking-widest placeholder:text-black placeholder:font-semibold border border-black' placeholder='Email' type="text" />
                    </div>
                </div>
            </div>

            <footer className='flex text-sm font-semibold justify-between px-16 mb-16'>
                <div className='flex justify-between w-[550px]'>
                    <p>Copyright Ignis Realtors 2022</p>
                    <p>Privacy Policy</p>
                    <p>Vendor Login</p>
                </div>
                <p>Inspired by <em className='text-red-500'>ZERO</em></p>
            </footer>
        </>
    )
}

export default Tailend
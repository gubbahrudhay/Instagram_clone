import '../index.css'
const Follow = () => {
    return(
        
            <div className='flex justify-between'>
                <div className='flex gap-2.5'>
                    <div className='h-10 w-10  bg-gray-500 rounded-[50%]'></div>
                    <div>
                        <div className='text-white text-[14px]'>surya035917</div>
                        <div className='text-[#a8a8a8] text-[14px]'>Surya Narayan</div>
                    </div>
                </div>

                <div className='text-blue-300 flex items-center'>
                    <a href="">Switch</a>
                </div>

            </div>
            
            
  
        
    )
}

const Circle = <div className='h-4 w-4 rounded-[50%] bg-amber-200'></div>

const SuggestedFollow = ()=>{
    return(
        
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div className='h-10 w-10  bg-gray-500 rounded-[50%]'></div>
                    <div>
                        <div className='text-white text-[14px]'>surya035917</div>
                        <div className='text-[#a8a8a8] text-[14px] flex items-center gap-1'>{Circle}Surya Narayan</div>
                    </div>
                </div>
            
                <div className='text-blue-300 flex items-center'>
                    <a href="">Follow</a>
                </div>
            </div>


    )
}

const FollowSuggestedPage = () => {
    return(
        <div className='h-fit w-80 bg-black ml-15 mt-15 flex flex-col gap-4 p-4'>
            <Follow />
            <div className='flex justify-between text-white'>
                <span>Suggested for you</span>
                <span>See all</span>
            </div>
            <SuggestedFollow />
            <SuggestedFollow />
            <SuggestedFollow />
            <SuggestedFollow />
            <SuggestedFollow />
            <SuggestedFollow />
        </div>
    )
}


// export default Follow;
// export default SuggestedFollow;
export default FollowSuggestedPage;
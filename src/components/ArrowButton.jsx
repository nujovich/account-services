export const ArrowButton = ({width, height, className, action}) => {
    
    
    return (
        <div className={className}>
            <iconify-icon icon={`bi:chevron-double-${action}`} width={width} height={height}></iconify-icon>
        </div>
    )
    
    
}
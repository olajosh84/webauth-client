export default function BouncingText () {
    return (
        <div className="flex gap-8">
            <div className="flex relative bouncing-text">
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-c">c</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-o">o</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-m">m</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-i">i</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-n">n</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-g">g</h1>
            </div>
            <div className="flex relative bouncing-text">
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-s">s</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-o2">o</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-o3">o</h1>
                <h1 className="text-4xl uppercase font-light tracking-widest bouncing-n2">n</h1>
            </div>
        </div>
    )
} 
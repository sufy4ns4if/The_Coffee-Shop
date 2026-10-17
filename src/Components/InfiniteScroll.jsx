
import { Children } from "react";

const InfiniteScroll = ({
    children,
    speed = 30,
    direction = "left",
    gap = 12,
    pauseOnHover = true,
    className = "",
}) => {
    const items = Children.toArray(children);

    if (!items.length) return null;

    return (
        <div
            className={`infiniteScroll ${className}`}
            style={{
                "--scroll-duration": `${speed}s`,
                "--scroll-gap": `${gap}px`,
                "--scroll-direction":
                    direction === "right" ? "reverse" : "normal",
            }}
        >
            <div
                className={`infiniteScroll__track ${
                    pauseOnHover ? "pauseOnHover" : ""
                }`}
            >
                {[0, 1].map((copy) => (
                    <div
                        className="infiniteScroll__group"
                        key={copy}
                        aria-hidden={copy === 1 ? "true" : undefined}
                    >
                        {items.map((item, index) => (
                            <div
                                className="infiniteScroll__item"
                                key={`${copy}-${index}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style>{`
                .infiniteScroll {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }

                .infiniteScroll__track {
                    display: flex;
                    width: max-content;
                    animation: infiniteScrollMove
                        var(--scroll-duration) linear infinite;
                    animation-direction: var(--scroll-direction);
                    will-change: transform;
                }

                .infiniteScroll__group {
                    display: flex;
                    flex: 0 0 auto;
                    align-items: center;
                    gap: var(--scroll-gap);
                    padding-right: var(--scroll-gap);
                }

                .infiniteScroll__item {
                    flex: 0 0 auto;
                    overflow: hidden;
                    border-radius: 7px;
                }

                .infiniteScroll__item img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 350ms ease;
                }

                .infiniteScroll__item:hover img {
                    transform: scale(1.09);
                }

                .infiniteScroll__track.pauseOnHover:hover {
                    animation-play-state: paused;
                }

                @keyframes infiniteScrollMove {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .infiniteScroll__track {
                        animation-play-state: paused;
                    }

                    .infiniteScroll__item img {
                        transition: none;
                    }
                }
            `}</style>
        </div>
    );
};
export default InfiniteScroll;
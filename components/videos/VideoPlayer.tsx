'use client'

import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface VideoPlayerProps {
  src: string
  poster?: string
}

export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      playerRef.current = videojs(videoElement, {
        controls: true,
        fluid: true,
        sources: [{
          src,
          type: 'video/mp4'
        }]
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
        playerRef.current = null
      }
    }
  }, [src])

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        poster={poster}
      />
    </div>
  )
} 
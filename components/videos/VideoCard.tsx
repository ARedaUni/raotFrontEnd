'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface Video {
  id: string
  title: string
  created_at: string
  processed_videos: {
    '360p': string
  }
}

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/watch/${video.id}`}>
      <div className="bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video relative">
          {/* Using a thumbnail from the video */}
          <video 
            src={video.processed_videos['360p']}
            className="w-full h-full object-cover"
            preload="metadata"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">{video.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {formatDistanceToNow(new Date(video.created_at), { addSuffix: true })}
          </p>
        </div>
      </div>
    </Link>
  )
} 
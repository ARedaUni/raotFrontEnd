import { VideoList } from '@/components/videos/VideoList'
import { VideoUpload } from '@/components/videos/VideoUpload'
import { AuthButton } from '@/components/auth/AuthButton'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Video Platform</h1>
        <AuthButton />
      </div>
      <VideoUpload />
      <div className="mt-8">
        <VideoList />
      </div>
    </main>
  )
} 
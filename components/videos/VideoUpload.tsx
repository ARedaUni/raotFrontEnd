'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '../ui/button'

export function VideoUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const router = useRouter()

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('videos')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Create video record
      const { error: insertError } = await supabase
        .from('videos')
        .insert([
          {
            title: file.name,
            status: 'processing',
            metadata: {
              size: file.size,
              type: file.type
            }
          }
        ])

      if (insertError) throw insertError

      router.refresh()
    } catch (error) {
      console.error('Error uploading video:', error)
    } finally {
      setUploading(false)
      setFile(null)
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <Button
        onClick={handleUpload}
        disabled={!file || uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Video'}
      </Button>
    </div>
  )
} 
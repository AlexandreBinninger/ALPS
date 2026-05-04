export default function Video() {
  return (
    <section id="video" className="border-t border-neutral-200 py-12 md:py-16">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Overview video
      </h2>
      <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-black">
        <video
          controls
          preload="metadata"
          className="block aspect-video w-full"
          poster="/ALPS/media/video/poster.jpg"
        >
          <source src="/ALPS/media/video/overview.mp4" type="video/mp4" />
          Your browser does not support the video tag. Download the file{' '}
          <a
            className="underline"
            href="/ALPS/media/video/overview.mp4"
          >
            here
          </a>
          .
        </video>
      </div>
    </section>
  )
}

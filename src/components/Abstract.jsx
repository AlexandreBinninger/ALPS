export default function Abstract() {
  return (
    <section
      id="abstract"
      className="border-t border-neutral-200 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Abstract
      </h2>
      <p className="mt-6 text-sm leading-relaxed text-neutral-700 md:text-base">
        The low-poly style is a popular genre of vector graphics that depicts
        objects and scenes as flat-shaded meshes of low polygon count, often
        with a limited palette. In this paper, we propose a method to generate
        2D low-poly meshes to abstract images. While it has been possible to
        achieve this look with general-purpose image generators and
        vector-based diffusion models, the resulting images are not guaranteed
        to be valid polygonal meshes. A key problem is that polygons overlap
        or intersect and, in the case of pixel-based image generators, the
        shapes are often not polygons. Moreover, the colors are not guaranteed
        to be constrained to a fixed palette. Aside from aesthetic
        considerations, this has practical consequences: it complicates editing
        and fabricating the results. We solve this problem by representing an
        image as a 2D polygonal mesh and optimizing the topology, geometry and
        coloring of the mesh using score distillation sampling, while
        enforcing geometric constraints, such as manifoldness and bijectivity.
        This presents unique challenges due to the discrete nature of the
        topology, which we handle using a fine-to-coarse strategy based on mesh
        simplification. By also constraining the colors to a fixed palette, we
        are able to produce various fabrications such as mosaics, embroidery,
        crocheting, patchwork and stencils from the resulting vector images.
      </p>
    </section>
  )
}

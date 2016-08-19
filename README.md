# Lazyset

*Automate the creation of responsive images for the `srcset` attribute.*

While writing, you shouldn't have to worry about responsive images. Automate the process, and let Lazyset handle it for you.


## Install

```
$ npm install lazyset
```


## Usage

#### Need a specific image resized?

```
$ lazyset create ./path/file.ext --width 400.

```

Want multiple sizes? Just separate the other widths by commas, e.g., `--width 400,700,1200`

*Height is auto generate to preserve dimensions*

#### need me to watch a directory for you?

```
$ lazyset watch ./path/ --width 400,800,1200
```

Any image you add to the chosen directory, will automatically generate resized replicas, with the width appended to the file name.

You can create an HTML snippet like the one below, and trust that lazyset will do the rest.

```
  <img src="./path/foo.png"
       srcset="./path/foo-1200.png 800w,
               ./path/foo-800.png 800w,
               ./path/foo-400.png 400w"
        sizes="max-width: 100%"
        alt="Responsive images aren't that annoying anymore">
```

##### Do you use Jekyll, or any other static site generator, and write in markdown?

You can turn the code above into a partial, include it in your markdown with the chosen image, and never have to worry about responsive images again.

Using liquid templating in Jekyll, for example:

```
// ./includes/image.html

<figure
  <img  src="./img/{{include.name}}.{{incude.type}}"
        srcset="./img/{{include.name}}-1200.{{include.type}} 1200w,
               ./img/{{include.name}}-800.{{include.type}} 800w,
               ./img/{{include.name}}-400.{{include.type}} 400w"
         sizes="max-width: 100%"
         alt="{{include.name | split: '-'}}">
</figure>
```

```
// ./_posts/08-19-17-lazyload.md

{% include image.html name="foo" type="png %}

```

Just run the `lazyload watch` command before you start writing, and add the desired image in the chosen directory.

Now all it takes is one line of work to include responsive images in your writing.




## Sample

```
$ lazyset create './sample/lazyset.png` --width 800,400

```

#### Original Image:

`lazyset.png`

![original](./sample/lazyset.png)

#### Created Images:

`lazyset-800.png`

![created at 800](./sample/lazyset-800.png)

`lazyset-400.png`

![created at 400](./sample/lazyset-400.png)

## License

Open sourced under the [MIT license](./LICENSE.md).

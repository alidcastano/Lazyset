# Lazyset

*Automate the creation of responsive images for srcset attribute.*

While writing, you shouldn't have to worry about responsive images. Automate the process, let Lazyset handle it for you.


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

#### Want me to watch a directory for you?

```
$ lazyset watch ./path/ --width 400,700,1200
```

Any image you add to directory `./path/` will automatically create replicas at desired sizes.

Just add the image, and get back to your writing. (:


## Sample

```
$ lazyset create './sample/lazyset.png` --width 800

```

#### Original Image:

![original](./sample/lazyset.png)

#### Created Image:

![created](./sample/lazyset-800.png)



## License

Open sourced under the [MIT license](./LICENSE.md).

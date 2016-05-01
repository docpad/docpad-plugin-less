import less from 'less';
import '../helpers/polyfill.js';

export default function (BasePlugin) {

  return class BaseClass extends BasePlugin {
    constructor (...args) {
      super(...args);


      this.config = {
        compress: true,
        parseOptions: null,
        compileOptions: null,
        environments: {
          development: {
            compress: false
          }
        }
      };
    }

    get name () {
      return 'less';
    }

    render (opts, next) {
      const { inExtension, outExtension, file } = opts;

      if (inExtension !== 'less' || ['css', null].indexOf(outExtension) === -1) return next();

      const parseOptions = {
        paths: file.get('fullDirPath'),
        filename: file.get('fullPath')
      };

      Object.assign(this.config, parseOptions);

      if (opts.content.indexOf('@import') !== -1) {
        file.setMetaDefaults({referenceOthers: true});
      }

      less.render(opts.content, parseOptions, (err, data) => {

        if (err) return next();

        opts.content = data.css;
        next();
      });

    }
  };

}

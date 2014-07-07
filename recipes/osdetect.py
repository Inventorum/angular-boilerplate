import logging, os

class OsDetect:

   def __init__(self, buildout, name, options):
       self.name, self.options = name, options
       logging.getLogger(self.name).debug(
           'Using OsDetect.')
       options['kernel'], options['arch'] = self.install()

       if options['kernel'] == 'Darwin':
           options['lib_path'] = "/opt/local"
           logging.getLogger(self.name).info(
               '"lib_path" is %s', options['lib_path'])
           options['make_opt'] = "macosx"
           logging.getLogger(self.name).info(
               '"make_opt" is %s', options['make_opt'])
       else:
           options['lib_path'] = "/usr/local"
           logging.getLogger(self.name).info(
               '"lib_path" is %s', options['lib_path'])
           options['make_opt'] = "linux"
           logging.getLogger(self.name).info(
               '"make_opt" is %s', options['make_opt'])
           
       if options['kernel'] == 'Linux' and options['arch'] in ('i686', 'i386'):
           options['cflags'] = "-pipe"
       else:
           options['cflags'] = "-pipe -Os"
       logging.getLogger(self.name).info('"cflags" is %s', options['cflags'])


   def install(self):
       _ = os.uname()
       uname = _[0]
       arch = _[-1]
       logging.getLogger(self.name).info(
           'Kernel Name is %s, Arch: %s', uname, arch)
       return uname, arch

   def update(self):
       return self.install()

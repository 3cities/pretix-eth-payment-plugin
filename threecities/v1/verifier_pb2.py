# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: threecities/v1/verifier.proto
# Protobuf Python Version: 4.25.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1dthreecities/v1/verifier.proto\x12\x0ethreecities.v1\"(\n\nSayRequest\x12\x1a\n\x08sentence\x18\x01 \x01(\tR\x08sentence\")\n\x0bSayResponse\x12\x1a\n\x08sentence\x18\x01 \x01(\tR\x08sentence2S\n\x0fVerifierService\x12@\n\x03Say\x12\x1a.threecities.v1.SayRequest\x1a\x1b.threecities.v1.SayResponse\"\x00\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'threecities.v1.verifier_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_SAYREQUEST']._serialized_start=49
  _globals['_SAYREQUEST']._serialized_end=89
  _globals['_SAYRESPONSE']._serialized_start=91
  _globals['_SAYRESPONSE']._serialized_end=132
  _globals['_VERIFIERSERVICE']._serialized_start=134
  _globals['_VERIFIERSERVICE']._serialized_end=217
# @@protoc_insertion_point(module_scope)
